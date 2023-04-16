using OpenAiClient.Models;
using System.Net;
using System.Text;
using System.Text.Json;

namespace OpenAiClient
{
    public class OpenAIHttpClient : IOpenAIHttpClient
    {
        private readonly HttpClient httpClient;

        public OpenAIHttpClient(HttpClient httpClient)
        {
            this.httpClient = httpClient;
        }

        public async Task<ChatResponse?> ChatAsync(string message)
        {
            var request = new ChatRequest("gpt-3.5-turbo", new List<ChatMessage> { new ChatMessage(message) });
            var content = new StringContent(JsonSerializer.Serialize(request), Encoding.UTF8, "application/json");

            using var httpResponse = await httpClient.PostAsync("v1/chat/completions", content);

            if (!httpResponse.IsSuccessStatusCode)
            {
                if(httpResponse.StatusCode == HttpStatusCode.Unauthorized)
                {
                    throw new UnauthorizedAccessException("The request returned an unauthorized response.");
                }
                throw new HttpRequestException("An error occured while processing your request");
            }

            var response = await httpResponse.Content.ReadAsStringAsync();

            return JsonSerializer.Deserialize<ChatResponse>(response);
        }
    }
}
