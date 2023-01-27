import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Post } from "./post";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      {
        id: 12,
        name: "The Easiest Naan",
        additionallyname:
          "Make homemade naan at home with this basic easy naan bread recipe.",
        description:
          "Make homemade naan at home with this basic easy naan bread recipe.Making homemade naan is easy and delicious – it’s the fastest, best bread you’ll make at home.This naan recipe comes together super quick. It’s soft and puffy, just like the bread you get at your favorite Indian restaurant. A recipe for naan is something every home cook should have in their back pocket. This recipe gets it tang and softness from milk and yogurt.",
        img: "https://www.kingarthurbaking.com/sites/default/files/2021-02/naan-3.jpg",
        author: "Liliya",
        date: "24/01.2023",
        label: "dinner",
      },
      {
        id: 13,
        name: "Huevos Rancheros",
        additionallyname:
          "Huevos rancheros might be the most ultimate breakfast out there.",
        description:
          "Huevos rancheros might be the most ultimate breakfast out there.Fried eggs, warm crispy tortillas, refried beans, and salsa come together in a beautiful medley of flavors and textures. So satisfying and truly the best way to start the day.Like most beloved breakfasts, there are many, many ways to make huevos rancheros and every family has their own way. That being said, all huevos rancheros plates include: sunny side up eggs, salsa, and tortillas. This iteration is our ultimate huevos rancheros and it’s absolutely one of my all time favorite breakfasts.",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/08/huevos-rancheros-5000w-2048x1366.webp",
        author: "Liliya",
        date: "25/01.2023",
        label: "eazy",
      },
      {
        id: 14,
        name: "Cereal Pancakes – Tiny Mini Pancakes!",
        additionallyname:
          "Pancakes, but make it MINI! These super cute tiny pancakes are the cutest quarantine breakfast you’ll ever make and eat!",
        description:
          "I love all mini things, especially mini food like these cereal pancakes.I’ve had a thing for mini pancakes for a while (see these mini strawberry shortcake cuties), so when I started seeing a huge amount of pancake cereal TikToks, I knew I had to make some! Trust me when I say that pancakes taste better when they’re mini. 10/10 would recommend. What are cereal pancakes? Pancake cereal is just pancakes, but mini, so they’re cereal sized! Imagine tiny, tiny freshly cooked pancakes in a bowl and there you have it: pancake cereal!",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/how-to-make-cereal-pancakes-2748w-2048x1366.webp",
        author: "Liliya",
        date: "25/01.2023",
        label: "eazy",
      },

      {
        id: 15,
        name: "Tostada Recipe",
        additionallyname:
          "Tostadas are like the ultimate giant nacho.",
        description:
          "I love all mini things, especially mini food like these cereal pancakes.I’ve had a thing for mini pancakes for a while (see these mini strawberry shortcake cuties), so when I started seeing a huge amount of pancake cereal TikToks, I knew I had to make some! Trust me when I say that pancakes taste better when they’re mini. 10/10 would recommend. What are cereal pancakes? Pancake cereal is just pancakes, but mini, so they’re cereal sized! Imagine tiny, tiny freshly cooked pancakes in a bowl and there you have it: pancake cereal!",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/08/tostadas-5531w-2048x1366.webp",
        author: "Liliya",
        date: "26/01.2023",
        label: "other",
      },
      {
        id: 16,
        name: "Green Chile Sauce",
        additionallyname:
          "TThe greatest everything sauce: smoky, savory, and delicious!",
        description:
          "Green chile sauce, along with red, are the backbones of New Mexican cuisine. The two flavorful chile sauces are used liberally, smothering and infusing all sorts of New Mexican dishes.If you’ve ever been to New Mexico, you’re familiar with the refrain: red, green or Christmas. They’re asking: red chile, green chile, or both? In the land of enchantment, there’s no wrong answer because red and green are both delicious. And, both sauces together, well, it’s the best of both worlds.",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2022/08/green-chile-sauce-5705w-2048x1366.webp",
        author: "Liliya",
        date: "26/01.2023",
        label: "other",
      },
      {
        id: 15,
        name: "The Best Easy One Pot Chicken and Rice Recipe",
        additionallyname:
          "The best kind of food hug: chicken and rice.",
        description:
          "If you’re looking for your next hands-off, delicious one pot dinner, this is it: Hainanese chicken.Have you ever had Hainanese chicken rice before? Are you as obsessed with it as I am? I’m guessing the answer is no because I have a lifelong, deep obsession with chicken rice.It’s my ultimate comfort food, my all-time-favorite go to meal, my version of Anton Ego’s mom’s ratatouille. You know, the scene in in the Pixar movie where Anton is taken back to his mom’s kitchen and she serves him ratatouille and all is right with the world. That’s Hainanese chicken rice for me.",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/09/one-pot-hainanese-chicken-7107w.jpg",
        author: "Liliya",
        date: "26/01.2023",
        label: "eazy",
      },
    ];
    return { posts };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0
      ? Math.max(...posts.map((post) => post.id)) + 1
      : 11;
  }
}
