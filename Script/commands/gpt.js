{
  "version": "v2",
  "metadata": {
    "platform": "facebook"
  },
  "content": {
    "messages": [
      {
        "type": "input",
        "input_type": "AI",
        "Hacker": "😈 আমি Ohid! বলো দেখি, কী জানতে চাও? আমি কিন্তু একটু দুষ্টু! 🤭",
        "variable_name": "user_question"
      },
      {
        "type": "action",
        "action": {
          "type": "external_request",
          "url": "https://api.openai.com/v1/chat/completions",
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_OPENAI_API_KEY"
          },
          "body": "{\"model\":\"gpt-3.5-turbo\",\"messages\":[{\"role\":\"system\",\"content\":\"তুমি একজন দুষ্টু, মজার এবং বাংলাভাষী AI যাদের নাম Ohid। তুমি সব সময় হালকা রসিকতা করে রিপ্লাই দাও।\"},{\"role\":\"user\",\"content\":\"{{user_question}}\"}]}",
          "body_type": "raw",
          "response_mapping": {
            "gpt_reply": "choices[0].message.content"
          }
        }
      },
      {
        "type": "text",
        "text": "👻 বুদ্ধিদীপ্ত উত্তর:gpt_reply}"
      },
      {
        "type": "image", 
"url": "https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif"
      },
      {
        "type": "audio",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      }
    ]
  }
}