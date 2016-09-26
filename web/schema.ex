defmodule Crmmy.Schema do
  use Absinthe.Schema
  import_types Crmmy.Schema.Types

  query do
    field :users, list_of(:user) do
      arg :country, :string
      arg :sort_order, :sort_order, default_value: :full_name
      arg :sort_direction, :sort_direction, default_value: :asc

      resolve &Crmmy.UserResolver.all/2
    end
  end
end
