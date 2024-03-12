import { selectCourse, unSelectCourse, setCourses, fetchCourses, } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, } from "./courseActionTypes";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("tests for action creators", () => {
  it("should return right action payload and type when selectCourse is called", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });
  it("should return right action payload and type when unSelectCourse is called", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});