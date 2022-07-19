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

type FirstResult = First<arr1>;

/**
 * Length
 */
type Length<T extends any[]> = T["length"];
type lengthHead = Length<arr1>;

/**
 * Exclude
 */
type MyExclude<T, K> = T extends K ? never : T;

type TodoExclude = MyExclude<Todo, "completed">;
// const todoX: TodoExclude = {
//   title: "Test Title",
//   description: "Test desc",
// };

/**
 * Awaited
 */
type ExampleType = Promise<string>;
type MyAwaited<T> = T extends Promise<infer U> ? U : never;
type Result = MyAwaited<ExampleType>;

/**
 * Boolean
 */
type If<T extends Boolean, A, B> = T extends true ? A : B;
type A = If<true, "a", "b">;
type B = If<false, "a", "b">;

/**
 * Concat
 */
type Concat<T extends any[], P extends any[]> = [...T, ...P];
type Result1 = Concat<[1], [2]>;

/**
 * Includes
 */
type Includes<T extends any[], V> = V extends T[number] ? true : false;
type Planets = Includes<["Earth", "Mars", "Venus", "Jupiter", "Pluto"], "Mars">;

/**
 * Push
 */
type Push<T extends (string | number)[], E extends any> = [...T, E];
type PushResult = Push<[1, 2], "3">;

/**
 * Unshift
 */
type Unshift<T extends number[], E extends number> = [E, ...T];
type UnshiftResult = Unshift<[1, 2], 0>;

/**
 * Parameters
 */

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer T
) => any
  ? T
  : never;
type FunctionArgs = MyParameters<typeof foo>;
