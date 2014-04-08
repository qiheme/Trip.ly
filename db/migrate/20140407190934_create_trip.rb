class CreateTrip < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.references :stop_id
      t.references :name_id
    end
  end
end
