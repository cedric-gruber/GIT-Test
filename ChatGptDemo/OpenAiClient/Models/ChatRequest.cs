using System.Text.Json.Serialization;

namespace OpenAiClient.Models
{
    public class ChatRequest
    {
        /// <summary>
        /// ID of the model to use
        /// </summary>
        [JsonPropertyName("model")]
        public string Model { get; set; }

        /// <summary>
        /// The messages to generate chat completions for
        /// </summary>
        [JsonPropertyName("messages")]
        public List<ChatMessage> Messages { get; set; }

        /// <summary>
        /// What sampling temperature to use, between 0 and 2. 
        /// Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
        /// </summary>
        [JsonPropertyName("temperature")]
        public double? Temperature { get; set; }

        /// <summary>
        /// An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. 
        /// So 0.1 means only the tokens comprising the top 10% probability mass are considered.
        /// </summary>
        [JsonPropertyName("top_p")]
        public double? TopP { get; set; }

        /// <summary>
        /// How many chat completion choices to generate for each input message
        /// </summary>
        [JsonPropertyName("n")]
        public int? N { get; set; }

        /// <summary>
        /// If set, partial message deltas will be sent, like in ChatGPT. 
        /// Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: [DONE] message.
        /// </summary>
        [JsonPropertyName("stream")]
        public bool? Stream { get; set; }

        /// <summary>
        /// Up to 4 sequences where the API will stop generating further tokens
        /// </summary>
        [JsonPropertyName("stop")]
        public string? Stop { get; set; }

        /// <summary>
        /// The maximum number of tokens to generate in the chat completion.
        /// The total length of input tokens and generated tokens is limited by the model's context length.
        /// </summary>
        [JsonPropertyName("max_tokens")]
        public int? MaxTokens { get; set; }

        /// <summary>
        /// Number between -2.0 and 2.0. 
        /// Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
        /// </summary>
        [JsonPropertyName("presence_penalty")]
        public double? PresencePenalty { get; set; }

        /// <summary>
        /// Number between -2.0 and 2.0. 
        /// Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
        /// </summary>
        [JsonPropertyName("frequency_penalty")]
        public double? FrequencyPenalty { get; set; }

        /// <summary>
        /// A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.
        /// </summary>
        [JsonPropertyName("user")]
        public string? User { get; set; }

        /// <summary>
        /// Modify the likelihood of specified tokens appearing in the completion.
        /// </summary>
        [JsonPropertyName("logit_bias")]
        public Dictionary<int, int>? logit_bias { get; set; }

        public ChatRequest(string model, List<ChatMessage> messages)
        {
            Model = model;
            Messages = messages;
        }
    }
}
