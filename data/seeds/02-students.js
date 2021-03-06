exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        {
          id: 1,
          username: "bobthebuilder",
          firstName: "Robert",
          lastName: "Builder",
          age: 12,
          school_id: 1,
          password: 'password'
        },
        {
          id: 2,
          username: "winterIsComing",
          firstName: "Jon",
          lastName: "Snow",
          age: 11,
          school_id: 2,
          password: 'password'
        },
        {
          id: 3,
          username: "lambdaElite",
          firstName: "Andrew",
          lastName: "Ogle",
          age: 33,
          school_id: 4,
          password: 'password'
        }
      ]);
    });
};
