const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/arsh", {
    //Arsh is server name
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`mongodb is connected`);
  })
  .catch((err) => {
    console.log(`ERROR`);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("student", student);

/*
const adder = async () => {
  const ss = new Student({
    name: "ABHI",
    workout: true,
    height: 6,
  });

  await ss.save(); // ss.save() -> ye ik promise return krega
};
*/

// 2nd way to add - more better

const adder = async () => {
  // const ss = await Student.create({
  //   name: "ARSHDEEP NAGI",
  //   workout: true,
  //   height: 6,
  // });
  // console.log(ss);

  //   await ss.save(); // ss.save() -> ye ik promise return krega

  //   const ss = await Student.find();
  //     console.log(ss);

  //   const ss = await Student.find({ height: { $eq: 6 } }); // eq = equal
  // $eq - equal, $gte = greater than equal, $gt = greater
  // $lt = less than , $ lte = less than equal, $ne = not equal
  // $in -> Matches any of the value specified in the array
  // eg -> ${in: [5,6] }; 5 or 6 koi bhi height ho dedo

  // $nin -> for filteration , bss jo array me pass krege unko chorh kar sare dikhadega

  // logical operators
  // $and, $or, $not
  console.log(ss);
};
adder();
