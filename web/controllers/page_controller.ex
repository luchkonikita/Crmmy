defmodule Crmmy.PageController do
  use Crmmy.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
