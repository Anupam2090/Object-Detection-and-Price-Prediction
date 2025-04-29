from ultralytics import YOLO

# Load YOLO model
model = YOLO('yolov8n.pt')  # lightweight model, good for starting

def detect_objects(image_path):
    """
    Detect real objects from uploaded image.
    """
    results = model(image_path)
    detected = set()

    for r in results:
        for c in r.boxes.cls:
            label = model.names[int(c)]
            detected.add(label.capitalize())

    return list(detected)
