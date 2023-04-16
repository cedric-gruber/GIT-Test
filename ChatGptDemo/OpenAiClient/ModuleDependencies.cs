using Microsoft.Extensions.DependencyInjection;
using OpenAiClient.Settings;

namespace OpenAiClient
{
    public static class ModuleDependencies
    {
        public static IServiceCollection AddOpenAiClient(this IServiceCollection services, OpenAISettings settings)
        {
            if (string.IsNullOrEmpty(settings.BaseAdress))
            {
                throw new ArgumentNullException($"{nameof(settings.BaseAdress)} is mandatory");
            }

            if (string.IsNullOrEmpty(settings.ApiKey))
            {
                throw new ArgumentNullException($"{nameof(settings.ApiKey)} is mandatory");
            }

            services.AddHttpClient<IOpenAIHttpClient, OpenAIHttpClient>((client) =>
            {
                client.BaseAddress = new Uri(settings.BaseAdress);
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {settings.ApiKey}");
            });

            return services;
        }
    }
}
