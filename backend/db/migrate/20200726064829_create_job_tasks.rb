class CreateJobTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :job_tasks do |t|
      t.boolean :complete
      t.integer :job_id
      t.integer :task_id

      t.timestamps
    end
  end
end
