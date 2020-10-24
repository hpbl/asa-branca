(ns my-music.core
  (:require [edna.core :as edna]))

(defn read-music []
  (load-file "src/my_music/music.clj"))

(defonce state (atom nil))

(defn -main []
  (swap! state edna/stop!)
  (reset! state (edna/play! (read-music))))

(defmacro build-for-cljs []
  (edna/edna->data-uri (read-music)))

