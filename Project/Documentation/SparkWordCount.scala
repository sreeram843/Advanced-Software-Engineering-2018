

import org.apache.spark.{SparkContext, SparkConf}

/**
 * Created by Mani.
 */
object SparkWordCount {
  def main(args: Array[String]) {
    val sparkConf = new SparkConf().setAppName("SparkWordCount").setMaster("local[*]")
    val sc = new SparkContext(sparkConf)
    val input = sc.textFile("input")

    //Transformation 1

    val wc = input.flatMap(line => {
      line.split(" ")
    }).groupBy(word => (word.charAt(0)))
      val output= wc.collect()

    wc.foreach(println(_))
  }

}
