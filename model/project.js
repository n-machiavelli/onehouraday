var mongoose = require('mongoose')
var Schema = mongoose.Schema
var projectSchema = new Schema( {
          name: String,
          description: String,
          category:String,
          contact_detail:{
            contact_type:String,
            contact_info:String,
            contact_name:String
          },
          tasks:[
            { 
              task_name:String,
              task_role:String
            }
          ],
          created_at:Date,
          updated_at:Date
      });
var Project = mongoose.model('project', projectSchema);

module.exports = Project;
