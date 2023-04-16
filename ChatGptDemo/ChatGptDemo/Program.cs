using Microsoft.Extensions.DependencyInjection;
using OpenAiClient;
using OpenAiClient.Settings;

var serviceCollection = new ServiceCollection();
serviceCollection.AddOpenAiClient(new OpenAISettings
{
    BaseAdress = "https://api.openai.com/",
    ApiKey = "MyApiKey",
});

var provider = serviceCollection.BuildServiceProvider();

var openAiClient = provider.GetService<IOpenAIHttpClient>();

if (openAiClient == null)
{
    throw new ArgumentNullException($"{nameof(IOpenAIHttpClient)} has not been configured");
}

while (true)
{
    Console.WriteLine("Enter your request:");
    var message = Console.ReadLine();

    if (string.IsNullOrEmpty(message))
    {
        Console.WriteLine("Your request cannot be empty.");
        Console.WriteLine();
        continue;
    }

    var chatResponse = openAiClient.ChatAsync(message).GetAwaiter().GetResult();
    var response = chatResponse?.Choices?[0].Message?.Content;

    Console.WriteLine($"Response : {response}");
    Console.WriteLine();
}
