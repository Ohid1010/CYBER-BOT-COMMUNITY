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
        "text": "👾 আমি Ohid 🤖 — রোমান্টিক মুড অন!\nকি জানতে চাও বলো?",
        "variable_name": "user_question"
      },
      {
        "type": "condition",
        "conditions": [
          {
            "condition": "contains",
            "value": "ohid",
            "source": "user_question"
          },
          {
            "condition": "contains",
            "value": "ai",
            "source": "user_question"
          },
          {
            "condition": "contains",
            "value": "hacker",
            "source": "user_question"
          },
          {
            "condition": "contains",
            "value": "tui ke",
            "source": "user_question"
          }
        ],
        "true_output": 1,
        "false_output": 2
      },
      {
        "type": "text",
"text": "🔐 আমি Ohid — তোমার AI assistant 🤖\nএনক্রিপ্টেড জ্ঞান খুলে দিতে প্রস্তুত!"
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
        "text": "💻 AI Boss Ohid বলছে:gemini_reply}"
      }
    ]
  }
}