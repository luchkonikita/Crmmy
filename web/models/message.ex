defmodule Crmmy.Message do
  use Ecto.Schema

  schema "messages" do
    field :sender_id, :integer
    field :text, :string

    timestamps
  end
end
