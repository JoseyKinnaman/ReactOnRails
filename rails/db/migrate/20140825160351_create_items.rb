class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer :list_id
      t.text :content
      t.datetime :completed_at
      t.integer :position

      t.timestamps
    end
    add_index :items, :list_id
  end
end
