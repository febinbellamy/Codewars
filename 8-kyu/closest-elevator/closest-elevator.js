const elevator = (left, right, call) => Math.abs(call - right) <= Math.abs(call - left) ? "right" : "left";
​