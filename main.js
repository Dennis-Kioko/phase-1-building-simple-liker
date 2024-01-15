// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  //Step 2: Listen for clicks on heart icons
  const hearts = document.querySelectorAll(".like-glyph");
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      // Step 3: Simulate a server request using mimicServerCall
      mimicServerCall()
        .then(() => {
          // Step 4: Server request was successful
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
        })
        .catch((error) => {
          // Step 5: Server request failed
          errorModal.classList.remove("hidden");
          const modalMessage = document.getElementById("modal-message");
          modalMessage.innerText = error;

          // Step 6: Use setTimeout to hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        })
        .finally(() => {
          // Step 7: Regardless of success or failure, hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
