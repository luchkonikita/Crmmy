defmodule Crmmy.UserResolver do
  import Ecto.Query

  def all(options, _info) do
    where = [country: options.country]
    order = Keyword.new([{options.sort_direction, options.sort_order}])
    users = Ecto.Query.from(
      u in Crmmy.User,
      where: ^where,
      left_join: m in assoc(u, :messages),
      order_by: ^order,
      preload: [messages: m]) |>
      Crmmy.Repo.all
    {:ok, users}
  end

  def all(_args, _info) do
    users = Crmmy.User |> Crmmy.Repo.all
    {:ok, users}
  end
end
