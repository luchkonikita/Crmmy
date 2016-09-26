defmodule Crmmy.Schema.Types do
  use Absinthe.Schema.Notation

  object :user do
    field :id, :id
    field :full_name, :string
    field :email, :string
    field :city, :string
    field :country, :string
    field :zip, :string
    field :messages, list_of(:message)
  end

  object :message do
    field :id, :id
    field :text, :string
  end

  enum :sort_order do
    value :full_name
    value :email
    value :created_at
  end

  enum :sort_direction do
    value :asc
    value :desc
  end
end
