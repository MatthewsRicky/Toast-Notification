const button = document.querySelector("button");
const toasts = document.getElementById("toast");

const messages = [
	"Message one",
	"Message two",
	"Message three",
	"Message Four",
];

button.addEventListener("click", () => createNotification());

function createNotification(messages) {
	const notification = document.createElement("div");
	notification.classList.add("toast");

	notification.innerText = getRandomMessage();

	toasts.appendChild(notification);

	setTimeout(() => {
		notification.remove();
	}, 3000);
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
