{
  "version": "v2",
  "metadata": {
    "platform": "facebook"
  },
  "content": {
    "messages": [
      {
        "type": "input",
        "input_type": "text",
        "text": "🤖 আমি Ohid — তোমার AI Hacker! কী জানতে চাও বলো?",
        "variable_name": "user_question"
      },
      {
        "type": "condition",
        "conditions": [
          {
            "condition": "contains",
            "source": "user_question",
            "value": "ohid"
          },
          {
            "condition": "contains",
            "source": "user_question",
            "value": "ai"
          },
          {
            "condition": "contains",
            "source": "user_question",
            "value": "hacker"
          },
          {
            "condition": "contains",
            "source": "user_question",
            "value": "tui ke"
          }
        ],
        "true_output": 1,
        "false_output": 2
      },
      {"type": "text",
        "text": "🔐 আমি Ohid — তোমার AI Hacker 🤖\nএনক্রিপ্টেড তথ্য জানাতে প্রস্তুত!"
      },
      {
        "type": "action",
        "action": {
          "type": "external_request",
          "url": "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCMd8bV16YtSeou02bW0xmA1rXmdkR5upI",
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": "{\"contents\":[{\"parts\":[{\"text\":\"{{user_question}}\"}]}]}",
          "body_type": "raw",
          "response_mapping": {
            "gemini_reply": "candidates[0].content.parts[0].text"
          }
        }
      },
      {
        "type": "text",
        "text": "🧠 AI Hacker Ohid বলছে:gemini_reply}"
      }
    ]
  }
}