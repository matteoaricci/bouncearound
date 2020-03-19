class CreateGameplays < ActiveRecord::Migration[6.0]
  def change
    create_table :gameplays do |t|
      t.integer :user_id
      t.integer :level_id

      t.timestamps
    end
  end
end
