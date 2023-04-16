using OpenAiClient.Models;

namespace OpenAiClient
{
    public interface IOpenAIHttpClient
    {
        Task<ChatResponse?> ChatAsync(string message);
    }
}
