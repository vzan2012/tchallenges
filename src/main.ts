import "./style.css";

const displayContent = `
<div>
  <h1>TypeScript Challenges</h1>
  <ol>
    <li> Hello World </li>
  </ol>
</div>
`;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = displayContent;

/**
 * Hello World
 */
type HelloWorld = string;
let testString: HelloWorld = "Welcome";
// console.log(typeof testString);

/**
 * Pick
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [C in K]: T[C];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Test Title",
  completed: true,
};

// console.log(todo);

// type TodoExclude = Exclude<"completed", Todo>;
// const todoX: TodoExclude = {
//   title: "Test Title",
//   description: "Test desc",
// };

/**
 * ReadOnly
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const todoTwo: MyReadonly<Todo> = {
  title: "Test 2",
  description: "Test 2 desc...",
  completed: true,
};
// console.log(todoTwo);
// todoTwo.title = "test Two";
// console.log(todoTwo);

/**
 * Tuple to Object
 */
const tuple = ["one", "two", "three"] as const;
type TupleToObj<K extends readonly any[]> = {
  [P in K[number]]: P;
};
type result = TupleToObj<typeof tuple>;

/**
 * First of array
 */
type arr1 = ["one", "two"];

type First<T extends any[]> = T extends [] ? never : T[0];

/**
 * Length
 */
type Length<T extends any[]> = T["length"];
type lengthHead = Length<arr1>;