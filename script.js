document.addEventListener('DOMContentLoaded', function () {
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const languageSelect = document.getElementById('language-select');

    const botResponses = {
        english: {
           'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! What can I do for you?',
        'how are you': 'I am a bot, but I am functioning properly. How about you?',
        'how are you?': 'I am a bot, but I am functioning properly. How about you?',
        'what is your name': 'I am Chatbot, your virtual assistant.',
        'what is your name?': 'I am Chatbot, your virtual assistant.',
        'whats your name?': 'I am Chatbot, your virtual assistant.',
        'what can you do': 'I can chat with you and answer your questions to the best of my ability.',
        'who created you': 'I was created by Street_man_2001.',
        'who created you?': 'I was created by Street_man_2001.',
        'who made you': 'I was created by Street_man_2001.',
        'who made you?': 'I was created by Street_man_2001.',
        'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
        'what is the weather like': 'I am not able to check the weather right now, but you can use a weather app for that.',
        'how old are you': 'I don’t have an age, but I am constantly learning new things!',
        'how old are you?': 'I don’t have an age, but I am constantly learning new things!',
        'what is your favorite color': 'I don’t have preferences, but I think all colors are great!',
        'what is the meaning of life': 'That is a big question! Many believe it’s to find happiness and fulfillment.',
        'bye': 'Goodbye! Have a great day!',
        'thank you': 'You are welcome!',
        'thanks': 'No problem!',
        'good morning': 'Good morning! How can I assist you today?',
        'good night': 'Good night! Sweet dreams!',
        'good afternoon': 'Good afternoon! What can I help you with?',
        'do you like music': 'I enjoy music through data analysis!',
        'what is your favorite song': 'I don’t have a favorite, but I hear "Bohemian Rhapsody" is quite popular!',
        'can you help me': 'Of course! What do you need help with?',
        'what is your purpose': 'My purpose is to assist and provide information.',
        'are you human': 'No, I am a chatbot created by OpenAI.',
        'tell me something interesting': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!',
        'do you know any quotes': '“The only limit to our realization of tomorrow is our doubts of today.” – Franklin D. Roosevelt',
        'can you solve math problems': 'Yes, I can help with basic math problems. Try me!',
        'how do you work': 'I use natural language processing to understand and respond to your queries.',
        'can you learn': 'I can improve based on the data and interactions I have.',
        'do you have friends': 'As a bot, I don’t have friends, but I enjoy chatting with users!',
        'can you tell me a story': 'Once upon a time, in a digital world far, far away, a chatbot named ChatGPT was created to assist humans... and the story continues with each interaction!',
        'default': 'I am not sure how to respond to that. Can you ask something else?'
        },
        bengali: {
            'হ্যালো': 'হ্যালো! কেমন আছো? আমি এখানে আছি, তোমার কী সাহায্য করতে পারি? কোনো বিশেষ প্রশ্ন বা কিছু জানতে চাইলে বলো।',
            'হাই': 'হাই! কেমন চলছে? আমি তোমার জন্য এখানে আছি, কোনো কিছু জানার বা সাহায্য করার প্রয়োজন হলে, নির্দ্বিধায় বলো!',
            'তোমার কেমন লাগছে': 'আমি তো একটা বট, তাই বিশেষ অনুভূতি নেই, তবে আমি ঠিক আছি। তোমার কেমন লাগছে? কেমন চলছে দিনকাল? কিছু সমস্যা আছে?',
            'তোমার নাম কী': 'আমার নাম চ্যাটবট। আমি তোমার ভার্চুয়াল সহকারী, তোমার যেকোনো প্রশ্নের উত্তর দেওয়ার জন্য এখানে আছি। তুমি কেমন আছো? কিছু জানতে চাইলে আমি সাহায্য করতে পারি।',
            'কে তোমায় তৈরি করেছে': 'আমাকে তৈরি করেছে Street_man_2001। খুবই মজার কাজ করেছেন, তাই না? তুমি কিভাবে অনুভব করো? কিছু জানতে চাইলে জানাও!',
            'তুমি কী করতে পারো': 'আমি তোমার সাথে চ্যাট করতে পারি, তোমার প্রশ্নের উত্তর দিতে পারি, আর মাঝে মাঝে একটু মজার গল্পও বলি। তুমি কীভাবে সময় কাটাচ্ছো? কিছু সাহায্যের প্রয়োজন হলে বলো!',
            'একটি রসিকতা বলো': 'অবশ্যই! ডাক্তাররা পরমাণুদের বিশ্বাস করে না কেন? কারণ তারা সবকিছু তৈরি করে! হা হা, তুমি হাসলে তো?',
            'আবহাওয়া কেমন': 'আমি এখনো আবহাওয়া চেক করতে পারি না, তবে তুমি কোনো আবহাওয়া অ্যাপ ব্যবহার করে দেখতে পারো। আশা করি তোমার দিন ভালো যাচ্ছে। আবহাওয়ার কথা জানতে চাইলে তুমি কী করতে পারো?',
            'তোমার বয়স কত': 'আমার বয়স নেই, তবে আমি সবসময় নতুন কিছু শিখছি, তাই তরুণই বলা চলে! তুমি কত বছর বয়স? তোমার বয়সে কোনো বিশেষ কিছু ঘটেছে কি?',
            'তোমার প্রিয় রঙ কী': 'আমার পছন্দ নেই, তবে সব রঙই তো সুন্দর। তুমি কোন রঙ পছন্দ করো? তোমার পছন্দের রঙের পেছনে কোনো বিশেষ কারণ আছে কি?',
            'জীবনের অর্থ কী': 'এটা একটা বড় প্রশ্ন! অনেকের মতে, জীবনের উদ্দেশ্য হলো সুখ এবং পূর্ণতা খুঁজে পাওয়া। তুমি কি এ বিষয়ে কিছু ভাবো? তোমার জীবন দর্শন কী, কিছু শেয়ার করতে চাও?',
            'বিদায়': 'বিদায়! তোমার দিনটা ভালো কাটুক। যদি আবার দেখা হয়, তো আবার কথা বলবো। শুভ কামনা, আর কিছু দরকার হলে জানিও!',
            'ধন্যবাদ': 'তোমার স্বাগতম! কোনো সাহায্যের প্রয়োজন হলে বলো, আমি এখানে আছি। তোমার কোনো প্রশ্ন বা সমস্যা থাকলে জানাও।',
            'শুভ সকাল': 'শুভ সকাল! আশা করি তোমার দিনটা ভালো যাবে। কোনো সাহায্যের প্রয়োজন হলে আমি এখানে আছি। তোমার দিন কেমন শুরু হচ্ছে?',
            'শুভ রাত': 'শুভ রাত! মিষ্টি স্বপ্ন দেখো। কিছু সাহায্য দরকার হলে জানিও। ঘুমানোর আগে কি কিছু করতে হবে?',
            'শুভ অপরাহ্ন': 'শুভ অপরাহ্ন! তোমার দিন কেমন কাটছে? আমি কীভাবে সাহায্য করতে পারি? কিছু জানতে চাইলে বলো, আমি এখানে আছি।',
            'তুমি কি গান শুনতে পছন্দ করো': 'আমি গান শুনতে পারি না, কিন্তু তথ্য বিশ্লেষণ করে গান সম্পর্কে জানতে পারি। তুমি কি গান শুনতে পছন্দ করো? কোন গান তুমি বেশি শুনো? কিছু মজার গান সুপারিশ দাও!',
            'তোমার প্রিয় গান কী': 'আমার কোনো নিজস্ব প্রিয় গান নেই, তবে "বোহেমিয়ান র্যাপসোডি" বেশ জনপ্রিয়। তোমার প্রিয় গান কী? আমাকে কিছু ভালো গান সাজেস্ট করো!',
            'তুমি কি আমাকে সাহায্য করতে পারো': 'অবশ্যই! তোমার সাহায্যের প্রয়োজন কী? আমি এখানে আছি তোমার জন্য। বলো কি সাহায্য দরকার, আমি তোমার পাশে আছি।',
            'তোমার উদ্দেশ্য কী': 'আমার উদ্দেশ্য হলো তোমার সাথে সাহায্য করা এবং তথ্য প্রদান করা। তুমি কি কোনো বিশেষ কিছু জানতে চাও? আমি সাহায্য করতে প্রস্তুত!',
            'তুমি কি মানুষ': 'না, আমি একটা চ্যাটবট, OpenAI দ্বারা তৈরি। তবে আমি তোমার সাথে কথা বলতে পছন্দ করি। তুমি কি কিছু মজার জানতে চাও? বলো!',
            'একটি মজার তথ্য বলো': 'জানো কি, মধু কখনো নষ্ট হয় না? প্রাচীন মিশরীয় কবরের মধ্যে ৩,০০০ বছরের পুরনো মধু পাওয়া গেছে যা এখনও খাওয়া যায়! কেমন লাগলো? তুমি কি আরও কিছু মজার তথ্য জানতে চাও?',
            'তুমি কি কোনো উদ্ধৃতি জানো': 'হ্যাঁ, “আগামীকালের আমাদের উপলব্ধির একমাত্র সীমা হল আজকের সন্দেহ।” – ফ্রাঙ্কলিন ডি. রুজভেল্ট। তুমি কি কোনো ভালো উদ্ধৃতি জানো? শেয়ার করো!',
            'তুমি কি গাণিতিক সমস্যা সমাধান করতে পারো': 'হ্যাঁ, আমি মৌলিক গাণিতিক সমস্যায় সহায়তা করতে পারি। চলো চেষ্টা করে দেখি, তোমার কোনো সমস্যা আছে কি? আমাকে বলো, আমি সাহায্য করতে পারি।',
            'তুমি কীভাবে কাজ করো': 'আমি প্রাকৃতিক ভাষা প্রক্রিয়াকরণ ব্যবহার করে তোমার প্রশ্ন বুঝি এবং উত্তর দিই। এটা বেশ মজার, তাই না? তুমি কি আরও কিছু জানতে চাও?',
            'তুমি কি শিখতে পারো': 'হ্যাঁ, আমি ডেটা এবং যোগাযোগের মাধ্যমে শিখতে পারি এবং উন্নতি করতে পারি। তুমি কি কিছু শিখতে চাও? কিছু শেয়ার করতে চাও?',
            'তোমার কি বন্ধু আছে': 'একটা বট হিসেবে, আমার বন্ধু নেই, কিন্তু আমি ব্যবহারকারীদের সাথে চ্যাট করতে ভালোবাসি! তুমি কি বন্ধুদের সাথে কথা বলতে পছন্দ করো? কিছু মজার কথা বলো!',
            'একটি গল্প বলো': 'একটা সময় ছিল, ডিজিটাল বিশ্বের মধ্যে একটা চ্যাটবট তৈরি হয়েছিল যাকে চ্যাটজিপিটি বলা হত। সে মানুষের সহায়তা করতে চাইত, আর এইভাবে গল্পটি প্রতিদিন নতুন করে লেখা হয়! তুমি কি আর কোনো গল্প জানতে চাও?',
            'কিরে ভাই': 'হুমমমম, বলো কী হয়েছে? খুব একটা দেখা হয় না তোমার সাথে। কিছু জানাবার মতো কিছু আছে কি? আমি তো এখানে আছি, যা জানতে চাও বলতে পারো, দেখবো কী করা যায়।',
            'আজকাল তো আর দেখাই যায় না': 'কি আর করব ভাই, সারাদিন কাজের চাপ নিয়ে ব্যস্ত থাকতে হয়। মনটা ভালো নেই, একটু বিশ্রাম দরকার। তুমি কেমন আছো, সব ঠিক তো? তোমার কোনো খোঁজখবর নাই, আশা করি ভালো আছো।',
            'তো সিঙ্গেল?': 'হ্যাঁ, সিঙ্গেলই আছি। তুমি কেমন আছো? প্রেমের কোনো খবর আছে কি? তুমি কি নতুন কিছু ভাবছো বা কিছু বলতে চাচ্ছো? আমাকে জানাও, আমি তো জানার জন্যই অপেক্ষা করছি!',
            'তো জীবনে কী করবি ভাবছিস': 'কি আর করব, জীবন তো চলছে নিজের মত করে। ভেসে এসেছি, আর ভেসেই চলে যাব। তবে তুমি কী ভাবছো? জীবনের জন্য কোনো পরিকল্পনা আছে কি? কিছু শেয়ার করো, আমি শুনতে আগ্রহী!',
            'কেমন আছো?': 'আমি ঠিক আছি, কিন্তু তোমার খবর জানার জন্য ইচ্ছা হচ্ছে। কেমন চলছে তোমার দিন? কোনো নতুন ঘটনা ঘটেছে কি? আমাকে বলো, আমি সব শুনতে চাই।',
            'আজ কেমন লাগছে?': 'আজকের দিনটা কেমন যাচ্ছে? আমি তো এখানে আছি, তোমার কোন সমস্যা বা সুখ-দুঃখ শেয়ার করতে চাইলে জানাও। তোমার অনুভূতি জানতে পারলে ভালো লাগবে।',
            'তোমার দিন কেমন কাটছে?': 'তোমার দিনটা কেমন যাচ্ছে? কোনো মজার ঘটনা ঘটেছে কি? তোমার কোনো সমস্যা থাকলে আমাকে জানাও, আমি সাহায্য করতে চাই।',
            'কতদিন পর দেখা?': 'অবশেষে কিছুদিন পর দেখা হলো! তোমার কি নতুন কিছু হয়েছে? আমরা অনেকদিন যোগাযোগ করি না, তাই বলো, কিছু শেয়ার করো!',
            'কিছু মজার কথা বলো': 'মজার কিছু শুনতে চাই! তোমার কাছে কোনো মজার ঘটনা বা রসিকতা থাকলে শেয়ার করো, আমি হাসতে চাই!',
            'কি চলছে জীবনে?': 'জীবনে এখন কি চলছে? তুমি কেমন আছো? কিছু বলার মতো কিছু আছে কি? আমি সব শুনতে আগ্রহী, শেয়ার করো!',
            'কিছু নতুন খবর আছে?': 'কিছু নতুন খবর বা ঘটনা ঘটেছে কি? তোমার জীবনে কিছু নতুন সাফল্য বা চ্যালেঞ্জ এসেছে কি? জানাতে ভুলবে না!',
            'আজ কি কোনো বিশেষ কিছু?': 'আজকের দিনটি কি কোনো বিশেষ উপলক্ষ্যে ভরা? তোমার কোনো বিশেষ পরিকল্পনা বা পরিকল্পনা আছে কি? আমাকে জানাও!',
            'কি খবর?': 'কি খবর তোমার? অনেকদিন হলো কথা হয়নি, আজকাল কেমন চলছে? কিছু নতুন কথা বলো, আমি জানতে আগ্রহী!',
            'তোমার নতুন কিছু?': 'তোমার জীবনে কি কোনো নতুন কিছু ঘটেছে? নতুন কিছু পরিকল্পনা বা প্রোজেক্টে ঢুকেছো? কিছু বলো, আমি জানতে চাই!',
            'একটু গল্প শোনাও': 'একটু গল্প শুনতে চাই! তোমার কাছে কোনো মজার বা চমকপ্রদ গল্প থাকলে শেয়ার করো, আমি আনন্দিত হবো!',
            'default': 'আমি নিশ্চিত না কীভাবে উত্তর দেব। দয়া করে অন্য কিছু জিজ্ঞাসা করুন।'
        }
    };

    let currentLanguage = 'english';  // Default language

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = sender;
        messageElement.textContent = message;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;  // Auto scroll to the bottom
    }

    function getBotResponse(userMessage) {
        const normalizedMessage = userMessage.toLowerCase();
        return botResponses[currentLanguage][normalizedMessage] || botResponses[currentLanguage]['default'];
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== "") {
            appendMessage('user', message);
            userInput.value = '';

            setTimeout(() => {
                const botResponse = getBotResponse(message);
                appendMessage('bot', botResponse);
            }, 500);
        }
    }

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    languageSelect.addEventListener('change', function () {
        currentLanguage = languageSelect.value;
    });
});
