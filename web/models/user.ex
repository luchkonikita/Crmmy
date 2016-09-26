defmodule Crmmy.User do
  use Ecto.Schema

  schema "users" do
    field :full_name, :string
    field :email, :string
    field :city, :string
    field :country, :string
    field :zip, :string
    has_many :messages, Crmmy.Message, foreign_key: :sender_id

    timestamps
  end
end
