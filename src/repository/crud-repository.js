
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const model = await this.model.create(data);
            return model;
        } catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const model = await this.model.insertMany(data);
            return model;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const models = await this.model.find();
            return models;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const model = await this.model.findById(id);
            return model;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try{
            const model = await this.model.findByIdAndUpdate(id,data,{new:true}); 
            return model;
        }catch (error) {
            console.log(error);
        }
    }

  async delete(id) {
    try {
      const model = await this.model.findByIdAndDelete(id);
      return model;
    } catch (error) {
      console.log(error);
    }
  }
  

}

export default CrudRepository;

// Path: src\repository\user-repository.js
// import User from'../models/user.js';
//
// class UserRepository{
//
//     async create (data) {
//         try {
//             const user = await User.create(data);
//             return user;
//         } catch (error) {
//             console.log(error)
//         }
//     }
//
//     async getAll (offset, limit) {
//         try {
//             const users = await User.find().skip(offset).limit(limit) ;
//             return users;

//         } catch (error) {
//             console.log(error)
//         }
//     }
//