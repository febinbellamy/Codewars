def can_play(hand, face_up):
    for current_card in hand:
        current_number, current_color = current_card.split(" ")
        if current_number in face_up or current_color in face_up:
            return True
    return False