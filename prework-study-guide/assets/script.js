const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (let x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    switch (randomTopic) {
        case 'HTML':
            console.log("Let's study HTML!");
            break;
        case 'CSS':
            console.log("Let's study CSS!");
            break;
        case 'Git':
            console.log("Let's study Git!");
            break;
        case 'JavaScript':
            console.log("Let's study JavaScript!");
            break;
        default:
            console.log('Please try again!');
            break;
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
