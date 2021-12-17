import Env from "@ioc:Adonis/Core/Env";

export default function Edge(values) {
  return {
    ...values,
    version: Env.get("ALTRP_VERSION")
  }
}
