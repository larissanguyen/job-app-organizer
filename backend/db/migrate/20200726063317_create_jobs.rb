class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :dateAdded
      t.string :title
      t.string :description
      t.string :link
      t.integer :roletype_id
      t.integer :company_id


      t.timestamps
  	end
  end
end
