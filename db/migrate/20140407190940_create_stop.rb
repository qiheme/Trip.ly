class CreateStop < ActiveRecord::Migration
  def change
    create_table :stops do |t|
      t.string :stop_name
      t.string :transit_mode
      t.string :agency
      t.string :city
      t.string :state
      t.integer :latitude
      t.integer :longitude
    end
  end
end
