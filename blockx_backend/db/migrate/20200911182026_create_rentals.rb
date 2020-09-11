class CreateRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.string :title
      t.string :poster
      t.string :description
      t.string :genre
      t.integer :rental_price
      t.belongs_to :subscriber
      t.timestamps
    end
  end
end
