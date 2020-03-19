class CreateLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :levels do |t|
      t.string :backdrop
      t.integer :level_number
      t.string :level_title
      t.timestamps
    end
  end
end
