<?php
class RoundToNearest {
  public static function roundUp(int $number, array $list): array {
    $result = [];
    $smallestDifference = 10000000000;
    for($x = 0; $x < count($list); $x++) {
      $currentNum = $list[$x];
      $difference = abs($number - $currentNum);
      if ($difference <= $smallestDifference) {
        $smallestDifference = $difference;
        array_push($result, $currentNum);
      }
    }
    return array_values(array_filter($result, fn ($num) => abs($number - $num) === $smallestDifference));
  }
}