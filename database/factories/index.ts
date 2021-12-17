import Factory from "@ioc:Adonis/Lucid/Factory";
import User from "App/Models/User";

export const UserFactory = Factory
  .define(User, () => {
    return {
      email: "kriper0nind@gmail.com",
      password: "Danechka005"
    }
  })
  .build()
