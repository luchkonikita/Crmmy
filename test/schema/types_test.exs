defmodule Crmmy.Schema.TypesTest do
  use ExUnit.Case

  describe "Crmmy.Schema.Types :user" do
    test "includes :id of type :id" do
      assert field_for_type(:user, :id).type == :id
    end

    test "includes :full_name of type :string" do
      assert field_for_type(:user, :full_name).type == :string
    end

    test "includes :email of type :string" do
      assert field_for_type(:user, :email).type == :string
    end

    test "includes :city of type :string" do
      assert field_for_type(:user, :city).type == :string
    end

    test "includes :country of type :string" do
      assert field_for_type(:user, :country).type == :string
    end

    test "includes :zip of type :string" do
      assert field_for_type(:user, :zip).type == :string
    end

    test "includes :messages as list_of(:message)" do
      assert field_for_type(:user, :messages).type == %Absinthe.Type.List{of_type: :message}
    end
  end

  describe "Crmmy.Schema.Types :message" do
    test "includes :id of type :id" do
      assert field_for_type(:message, :id).type == :id
    end

    test "includes :text of type :string" do
      assert field_for_type(:message, :text).type == :string
    end
  end

  defp field_for_type(type_name, field) do
    Map.get defined_types(type_name).fields, field
  end

  defp defined_types(name) do
    Crmmy.Schema.Types.__absinthe_type__(name)
  end
end
