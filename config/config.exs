# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :crmmy,
  ecto_repos: [Crmmy.Repo]

# Configures the endpoint
config :crmmy, Crmmy.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "W75UxVfx/Fb7G542X8wEloQF9YzH6ShhvBWd7hDDE8/v6urlQi19leLCjoPNmJnf",
  render_errors: [view: Crmmy.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Crmmy.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
