defmodule Crmmy.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def up do
    create table(:messages) do
      add :text,         :text
      add :sender_id,    :integer, null: false
      timestamps
    end

    create index(:messages, [:sender_id])
  end

  def down do
    drop table(:messages)
  end
end
