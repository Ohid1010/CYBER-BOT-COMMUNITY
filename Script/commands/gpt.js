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
 curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: AIzaSyCBGBrCrr4z2WMMZdo2BGuzjjQSSAkn08g' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'