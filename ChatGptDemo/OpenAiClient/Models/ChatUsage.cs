using System.Text.Json.Serialization;

namespace OpenAiClient.Models
{
    public class ChatUsage
    {
        [JsonPropertyName("prompt_tokens")]
        public int? prompt_tokens { get; set; }

        [JsonPropertyName("completion_tokens")]
        public int? completion_tokens { get; set; }

        [JsonPropertyName("total_tokens")]
        public int? total_tokens { get; set; }
    }
}
