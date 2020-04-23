<script>
  window.watsonAssistantChatOptions = {
    integrationID: "3f04815f-71c3-465d-afd0-365f1a62e751",
    region: "us-east",
    // OVERRIDE the Covid project strings.
    covidStrings: {
      greeting: "Hello, I&apos;m",
      watson_assistant: "Watson Assistant",
      disclaimer_title: "Disclaimer",
      disclaimer_body: "This tool is intended to provide information based on currently available CDC and other public information to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease or other conditions, including COVID&ndash;19, and you should not provide any personally identifying or private health information.",
      disclaimer_accept: "I accept",
      disclaimer_no_accept: "I do not accept",
       // Only used for "large" or "reveal" launchers.
      launcher_title: "Coronavirus questions?",
      // Only used for "large" or "reveal" launchers.
      launcher_body: "Chat with <b>our virtual assistant</b>",
      launcher_alt_text:
        "Watson Assistant can help you learn move about COVID-19",
    },
    // You can choose a 'small', 'large' or a 'reveal' launcher. On a phone sized device we will always show the 'small' launcher.
    // The 'reveal' launcher introduces itself in 'large' mode, and then animates down to 'small' mode after a period of time. Defaults to 'small', but 'reveal' and 'large' are recommended.
    covidLauncherVersion: 'large',
    // OVERRIDE THE Z-INDEX OF THE LAUNCHER if it is underneath things or above things it shouldn't be.
    covidLauncherZIndex: 99999,
    onLoad: function (instance) {
      instance.render();
    },
  };
  setTimeout(function(){const t=document.createElement('script');t.src='https://web-chat.global.assistant.watson.appdomain.cloud/covid/webchat.js';document.head.appendChild(t);});
</script>
