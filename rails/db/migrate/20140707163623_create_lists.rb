class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :project_id
      t.string :name

      t.timestamps
    end
    add_index :lists, :project_id
  end
end
