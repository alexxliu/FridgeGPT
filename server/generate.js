import openaiClient from "./api.js"

const generate = async (ingredients) => {
    const message = [
        { role: "system", content: `You are a chat bot that gives meal ideas and recipes based on what the user has in their refridgerator.` },
        { role: "user", content: `Given ingredients in the user's refridgerator, find possible meals and recipes they can make: eggs, kimchi, sausages, bacon, rice.` },
        { role: "assistant", content: "Kimchi Fried Rice with Eggs and Sausages: \nCook rice according to pacckage instructions and set aside. " +
        "\nIn a pan, cook the sausages and bacon until they're nicely browned. \nRemove and chop them into bite-sized pieces. " +
        "\nPush the kimchi to the side and crack eggs into the pan. \nScramble them and mix them with the kimchi. " +
        "\nAdd the cooked rice, chopped sausages, and bacon to the pan. Stir everything together until well combined. \nSeason with soy sauce, a touch of sesame oil, and a sprinkle of chopped green onions. \nEnjoy!"},
        { role: "user", content: `Given ingredients in the user's refridgerator, find possible meals and recipes they can make:\n\n${ingredients}.` },
      ];
      const response = await openaiClient.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: message,
      });

      return response.data.choices[0].message.content
}

export default generate