using System.Text.Json.Serialization;

namespace OpenAiClient.Models
{
    public class ChatChoice
    {
        [JsonPropertyName("index")]
        public int? Index { get; set; }

        [JsonPropertyName("message")]
        public ChatMessage? Message { get; set; }

        [JsonPropertyName("finish_reason")]
        public string? FinishReason { get; set; }
    }
}
