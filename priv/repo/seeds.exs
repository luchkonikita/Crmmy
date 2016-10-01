# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Crmmy.Repo.insert!(%Crmmy.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
Crmmy.Repo.delete_all(Crmmy.User)
Crmmy.Repo.delete_all(Crmmy.Message)

Faker.start

Enum.each 0..10000, fn num ->
  user = Crmmy.Repo.insert!(
    %Crmmy.User{
      email: Faker.Internet.email,
      full_name: Faker.Name.name,
      city: Faker.Address.city,
      country: Faker.Address.country,
      zip: Faker.Address.zip
    }
  )

  Enum.each 0..5, fn num ->
    Crmmy.Repo.insert!(
      %Crmmy.Message{
        sender_id: user.id,
        text: Faker.Lorem.Shakespeare.as_you_like_it
      }
    )
  end
end
