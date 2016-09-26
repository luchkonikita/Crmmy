defmodule MyRepo.Migrations.CreateUsers do
  use Ecto.Migration

  def up do
    create table(:users) do
      add :full_name, :string, null: false
      add :email,     :string, null: false
      add :city,      :string
      add :country,   :string
      add :zip,       :string
      timestamps
    end

    create index(:users, [:city])
    create index(:users, [:country])
  end

  def down do
    drop table(:users)
  end
end
