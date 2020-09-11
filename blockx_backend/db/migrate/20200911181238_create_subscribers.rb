class CreateSubscribers < ActiveRecord::Migration[6.0]
  def change
    create_table :subscribers do |t|
      t.string :username
      t.string :email
      t.string :photo
      t.timestamps
    end
  end
end
